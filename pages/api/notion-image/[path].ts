import { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";
import { NOTION_AUTH_TOKEN } from "../../../lib/web.config";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { path, table, id } = req.query;
    console.log(path, table, id);
    const url = `https://www.notion.so/image/${encodeURIComponent(Array.isArray(path) ? path[0] : path)}?table=${table}&id=${id}&cache=v2`;

    const response = await fetch(url, {
        headers: {
            cookie: `token_v2=${NOTION_AUTH_TOKEN}`
        }
    });
    console.log(response);
    res.status(200).send(response.body);
};