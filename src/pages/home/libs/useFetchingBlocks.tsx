import {useEffect, useState} from "react";
export const useFetchingBlocks = () => {

    const [blocks, setBlocks] = useState([]);
    const [loading, setLoading] = useState(false);
    const request = async () => {
        setLoading(true);
        const response = await fetch('https://buffalo-backend-dev.ssd.uz/api/reports');
        const json = await response.json();
        return json;
    }
    useEffect(() => {
        request().then((data) => {
            setBlocks(data);
            setLoading(false);
        }).finally(() => {
            setLoading(false);
        });
    }, []);

    return [blocks, loading];


}