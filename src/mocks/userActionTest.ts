import { rest } from 'msw'

const handlers =[
    rest.post('/api/signin', (req, res, ctx) => {
        const body = req.body as { email : string, password: string }

        if(!body.email || !body.password) {
            return res (
                ctx.status(400),
                ctx.json({
                    error : 'Either email or password is empty'
                })
            )
        }

        if(body.email === 'lee@gmail.com' && body.password === 'abcd1234') {
            return res(
                ctx.status(200),
                ctx.json({
                    token : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImxlZSB3b25oZWUiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NDk2ODE1NDMsImV4cCI6MTY0OTY4NTE0M30.a0vOnqSLb6F5owiALVOUhFUaN071scYvKYYi9c9xLGg'
                })
            )
        }

        return res(
            ctx.status(401),
            ctx.json({
                error : "Invalid user"
            })
        )
    })
]

export default handlers