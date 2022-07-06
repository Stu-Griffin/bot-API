export default async function tryCatchMiddlewareAPI(req, res, calback) {
    try {
        const response = await calback;
        res.status(200);
        res.send(response);
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: `by the method ${req.method}, on path ${req.path} was error` });
    }
}

export async function tryCatchMiddlewareNotAPI(calback, successMsg) {
    try {
        const response = await calback;
        console.log(successMsg);
    } catch (err) {
        console.log(err);
    }
}