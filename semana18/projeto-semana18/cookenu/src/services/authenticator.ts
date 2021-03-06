import * as jwt from "jsonwebtoken";

export type AuthenticationData = {
    id: string
}

export function generateToken(input: AuthenticationData): string {
    const token = jwt.sign(
        {
            id: input.id,
        },
        process.env.JWT_KEY as string,
        {
            expiresIn: process.env.JWT_EXPIRE_TIME as string
        }
    )
    return token
}

export function getTokenData(token: string): AuthenticationData {
    const payload =  jwt.verify(
        token,
        process.env.JWT_KEY as string
    ) as AuthenticationData

    return {
        id: payload.id
    }
} 