function calculatePostScore(post){
    const{
        likes = 0,
        shares = 0,
        comments = 0,
        views = 1
    } = post;

    // Calculate the score based on the post's engagement metrics
    const score = (likes * 2 + shares * 3 + comments * 1.5) / (views * 1);
    return parseFloat(score.toFixed(3))
}
module.exports = { calculatePostScore };
