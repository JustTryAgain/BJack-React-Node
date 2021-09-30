import jwt from "jsonwebtoken";

export const secKey = process.env.JWT_KEY || "secret";
export const allGames = {};


export const tokenVerify = (token) => {
    return jwt.verify(token, secKey);
}

export const authMiddleware = async (ctx, next) => {
    const requestData = ctx.request.headers;
    const token = requestData.token;

    if (!token) {
        ctx.throw(401, 'There is empty');
    }

    try {
        const {id} = tokenVerify(token);
        console.log(id);
        if (Object.keys(allGames).includes(id)) {
            await next();
        }
    } catch (error) {
        ctx.throw(401,'i catch error: ' + error);
    }
}
