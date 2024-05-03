export default class Payloads {

    create_post() {
        return {
            data: {
                title: 'Vibes',
                body: 'Nigeria is a great place to visit',
                userId: "1"
            }
        }
    }

    update_post() {
        return {
            data: {
                title: 'Technology',
                body: 'The world is fast evolving into a technological orb',
            }
        }
    }
}