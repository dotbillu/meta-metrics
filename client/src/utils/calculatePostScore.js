function calculatePostScore(post) {
    const {
        likes,
        shares,
        comments,
        views
    } = post;

    // Calculate the score based on the post's engagement metrics
    if (views === 0) {
        if (typeof window !== "undefined" && window.alert) {
            window.alert("0 views lol");
        }
        return 0;
    }

    const score = (likes * 2 + shares * 3 + comments * 1.5) / (views * 1);
    return parseFloat(score.toFixed(3));
}

module.exports = { calculatePostScore };