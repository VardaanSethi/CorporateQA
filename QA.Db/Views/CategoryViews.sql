USE CorporateQA;

CREATE VIEW CategoriesView AS
SELECT COUNT(Questions.CategoryId) AS [Questions],
Categories.Id,
Categories.Name,
Categories.Description,
CategoryQuestionCountThisWeek,
CategoryQuestionCountThisMonth FROM Categories 
LEFT JOIN Questions 
ON Categories.Id=Questions.CategoryId 
LEFT JOIN CategoryQuestionsCountThisWeekView 
ON CategoryQuestionsCountThisWeekView.CategoryId=Categories.Id
LEFT JOIN CategoryQuestionsCountThisMonthView 
ON CategoryQuestionsCountThisMonthView.CategoryId=Categories.Id
GROUP BY Questions.CategoryId,Categories.Id,Categories.Name,
Categories.Description,CategoryQuestionCountThisWeek,CategoryQuestionCountThisMonth;


CREATE VIEW  CategoryQuestionsCountThisWeekView AS
SELECT CategoryId,COUNT(*) AS CategoryQuestionCountThisWeek 
FROM Questions GROUP BY CategoryId,CreatedOn 
HAVING DATEDIFF(WEEK, CreatedOn, SYSDATETIME()) = 1;


CREATE VIEW  CategoryQuestionsCountThisMonthView AS
SELECT CategoryId,COUNT(*) AS CategoryQuestionCountThisMonth 
FROM Questions GROUP BY CategoryId,CreatedOn 
HAVING DATEDIFF(MONTH, CreatedOn, SYSDATETIME()) = 1 ;