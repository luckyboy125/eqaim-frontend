import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (typeof process.env.BASE_URL !== "undefined") {
      const url = process.env.BASE_URL;
      const response: any = await axios.post(`${url}/add/save`, req.body);
      return res.status(200).json(response.data);
    }
  } catch (error) {
    return res.status(400).json({
      error: `Oops, something went wrong...`,
    });
  }
};
