USE CorporateQA;

CREATE VIEW AnswersView AS
SELECT Answers.Id AS [AnswerId],
Answers.QuestionId,
Likes,Dislikes,
Answers.[Description],CreatedOn,
AspNetUsers.Id AS [UserId],
ProfileImageUrl,
IsBestSolution,
UserName 
FROM Answers 
INNER JOIN AspNetUsers 
ON Answers.UserId=AspNetUsers.Id;