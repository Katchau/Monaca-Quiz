// Import F7
import Framework7 from 'framework7/framework7.esm.bundle.js';

const apiUrl = 'https://opentdb.com/api.php';

let categoriesJSON = [
        {
            "id": 9,
            "name": "General Knowledge"
        },
        {
            "id": 10,
            "name": "Entertainment: Books"
        },
        {
            "id": 11,
            "name": "Entertainment: Film"
        },
        {
            "id": 12,
            "name": "Entertainment: Music"
        },
        {
            "id": 13,
            "name": "Entertainment: Musicals & Theatres"
        },
        {
            "id": 14,
            "name": "Entertainment: Television"
        },
        {
            "id": 15,
            "name": "Entertainment: Video Games"
        },
        {
            "id": 16,
            "name": "Entertainment: Board Games"
        },
        {
            "id": 17,
            "name": "Science & Nature"
        },
        {
            "id": 18,
            "name": "Science: Computers"
        },
        {
            "id": 19,
            "name": "Science: Mathematics"
        },
        {
            "id": 20,
            "name": "Mythology"
        },
        {
            "id": 21,
            "name": "Sports"
        },
        {
            "id": 22,
            "name": "Geography"
        },
        {
            "id": 23,
            "name": "History"
        },
        {
            "id": 24,
            "name": "Politics"
        },
        {
            "id": 25,
            "name": "Art"
        },
        {
            "id": 26,
            "name": "Celebrities"
        },
        {
            "id": 27,
            "name": "Animals"
        },
        {
            "id": 28,
            "name": "Vehicles"
        },
        {
            "id": 29,
            "name": "Entertainment: Comics"
        },
        {
            "id": 30,
            "name": "Science: Gadgets"
        },
        {
            "id": 31,
            "name": "Entertainment: Japanese Anime & Manga"
        },
        {
            "id": 32,
            "name": "Entertainment: Cartoon & Animations"
        }];


let quizQuestionRequest = function (successMethod, category, difficulty) {
    let amount = 5; //number of questions
    let type = 'multiple';
    let encode = 'url3986';

    Framework7.request.promise.get(apiUrl, {
        amount,
        type,
        category,
        difficulty,
        encode
    }, 'json').then(function (res) {
        successMethod(res.data)
    }).catch(function (error) {
        console.log(error.message)
    })
};

export {
    quizQuestionRequest,
    categoriesJSON
}
