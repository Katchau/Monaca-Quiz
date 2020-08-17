// Import F7
import Framework7 from 'framework7/framework7.esm.bundle.js';

const apiUrl = 'https://opentdb.com/api.php';

let quizQuestionRequest = function (successMethod, category, difficulty) {
    let amount = 1; //number of questions
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
    quizQuestionRequest
}
