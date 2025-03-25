import { useQuery } from "@tanstack/react-query";
import { FunctionComponent } from "react";

const CatList: FunctionComponent = () => {
    const fetchCats = async () => {
        const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
        if (!response.ok) {
            throw new Error(`Error fetching cats: ${response.statusText}`);
        }
        return response.json();
    };

    const myOPtions = {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
    }

    const { data, error, isLoading } = useQuery({
        queryKey: ["cats"],
        queryFn: fetchCats,
        staleTime: 5 * 60 * 1000, // 5 minutes
        cacheTime: 10000,
        gcTime: 10000, // 10 minutes
        ...myOPtions
    });

    if (isLoading) return <div>Loading...</div>;
    if (error instanceof Error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h1>Cat List</h1>
            <ul>
                {data?.map((cat: { id: string; url: string }) => (
                    <li key={cat.id}>
                        <img src={cat.url} style={{ width: "200px", height: "auto" }} alt="Cat" />
                    </li>
                ))}
            </ul>
            <div>Total: {data?.length}</div>
        </div>
    );
};

export { CatList };
