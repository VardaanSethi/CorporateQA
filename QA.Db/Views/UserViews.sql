USE CorporateQA;

CREATE VIEW UsersView As
SELECT AspNetUsers.Id,
UserName,
JobRole,
Department,
JobLocation,
ProfileImageUrl,
Count(Questions.Id) AS [QuestionsAsked],
QuestionsAnswered,
QuestionsSolved,
QuestionsAnsweredByUser.Likes,
QuestionsAnsweredByUser.Dislikes
FROM AspNetUsers
LEFT JOIN Questions ON Questions.UserId=AspNetUsers.Id
LEFT JOIN QuestionsAnsweredByUser ON QuestionsAnsweredByUser.UserId=AspNetUsers.Id
LEFT JOIN QuestionsSolvedByUser ON QuestionsSolvedByUser.UserId=AspNetUsers.Id
GROUP BY AspNetUsers.Id,UserName,JobRole,Department,JobLocation,ProfileImageUrl,
QuestionsAnsweredByUser.Likes,Dislikes,QuestionsAnswered,QuestionsSolvedByUser.QuestionsSolved;

 

CREATE VIEW QuestionsAnsweredByUser AS
SELECT UserId, COUNT(*) AS QuestionsAnswered 
,Likes,Dislikes from Answers GROUP BY UserId,Likes,Dislikes;

CREATE VIEW  QuestionsSolvedByUser AS
SELECT UserId, COUNT(*) AS QuestionsSolved 
FROM Answers GROUP BY UserID,IsBestSolution 
HAVING IsBestSolution = 1;