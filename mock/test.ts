import { Request, Response } from 'express';
export default {
  'GET /api/testList': async (req: Request, res: Response) => {
    const result = {
      success: true,
      data: [
        {
          key: 1,
          id: 1,
          name: 'Cheung',
          sort: 1,
        },
        {
          key: 2,
          name: '幼稚完',
          sort: 2,
        },
        {
          key: 3,
          name: 'eeeee',
          sort: 3,
        },
        {
          key: 4,
          name: 'askelade',
          sort: 4,
        },
      ],
    };

    return res.json(result);
  },
};
