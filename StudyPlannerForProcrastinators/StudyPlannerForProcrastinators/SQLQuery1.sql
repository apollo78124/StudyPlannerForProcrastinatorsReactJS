SET IDENTITY_INSERT studyplannerdb.dbo.Teacher OFF;
SET IDENTITY_INSERT studyplannerdb.dbo.Student OFF;
SET IDENTITY_INSERT studyplannerdb.dbo.ToDo OFF;
GO

USE [studyplannerdb2]
GO

INSERT INTO [dbo].[Teacher]
           ([LastName]
           ,[FirstMidName])
     VALUES
           ('Lee',
           'David')
GO

USE [studyplannerdb2]
GO

USE [studyplannerdb2]
GO

INSERT INTO [dbo].[Student]
           ([LastName]
           ,[FirstMidName]
           ,[TeacherFk])
     VALUES
           ('Lee',
           'Eunhak',
           1)
GO


INSERT INTO [dbo].[TeacherCredentials]
           ([username]
           ,[password]
           ,[TeacherID])
     VALUES
           ('teacher1username'
           ,'password1234'
           ,1)
GO

USE [studyplannerdb2]
GO

INSERT INTO [dbo].[StudentCredentials]
           ([username]
           ,[password]
           ,[StudentID])
     VALUES
           ('student6username'
           ,'password1234'
           ,6)
GO



