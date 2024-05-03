export default class Payloads {

    create_post() {
        return {
            data: {
                title: 'The world',
                body: 'Welcome to America',
                userId: 1
            }
        }
    }
}