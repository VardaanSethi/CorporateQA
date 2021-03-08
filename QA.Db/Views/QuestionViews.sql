USE CorporateQA;

CREATE VIEW QuestionsView AS
SELECT Questions.Id AS [QuestionId],Title,
Questions.Description,CategoryId,
[Views],Questions.CreatedOn,
UpVotes,
AspNetUsers.Id AS [UserId],
Answers.UserId As [AnswersUserId],
ProfileImageUrl,UserName,
COUNT(Answers.Id) AS [Answers],
BestSolution
FROM AspNetUsers 
INNER JOIN Questions 
ON AspNetUsers.Id=Questions.UserId 
LEFT JOIN Answers
ON Answers.QuestionId=Questions.Id 
LEFT JOIN SolvedQuestionsView ON SolvedQuestionsView.QuestionId=Questions.Id
GROUP BY Questions.Id,Questions.[Description],Title,[Views],CategoryId,
Questions.CreatedOn,UpVotes,AspNetUsers.Id,ProfileImageUrl,UserName,BestSolution,Answers.UserId;

CREATE VIEW SolvedQuestionsView AS
SELECT QuestionId,COUNT(IsBestSolution) AS BestSolution 
FROM Answers GROUP BY QuestionId,IsBestSolution HAVING IsBestSolution=1;