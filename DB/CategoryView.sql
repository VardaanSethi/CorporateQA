CREATE VIEW  CategoryQuestionsCountThisWeekView AS
SELECT CategoryId,COUNT(*) AS CategoryQuestionCountThisWeek 
FROM Questions GROUP BY CategoryId,CreatedOn 
HAVING DATEDIFF(WEEK, CreatedOn, SYSDATETIME()) = 1;

CREATE VIEW  CategoryQuestionsCountThisMonthView AS
SELECT CategoryId,COUNT(*) AS CategoryQuestionCountThisMonth 
FROM Questions GROUP BY CategoryId,CreatedOn 
HAVING DATEDIFF(MONTH, CreatedOn, SYSDATETIME()) = 1 ;

CREATE VIEW CategoriesView AS
SELECT COUNT(Questions.CategoryId) AS [Questions],
Category.Id,
Category.Name,
Category.Description,
CategoryQuestionCountThisWeek,
CategoryQuestionCountThisMonth FROM Category
LEFT JOIN Questions 
ON Category.Id=Questions.CategoryId 
LEFT JOIN CategoryQuestionsCountThisWeekView 
ON CategoryQuestionsCountThisWeekView.CategoryId=Category.Id
LEFT JOIN CategoryQuestionsCountThisMonthView 
ON CategoryQuestionsCountThisMonthView.CategoryId=Category.Id
GROUP BY Questions.CategoryId,Category.Id,Category.Name,
Category.Description,CategoryQuestionCountThisWeek,CategoryQuestionCountThisMonth;