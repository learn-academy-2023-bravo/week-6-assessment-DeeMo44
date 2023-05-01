# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort and a model called Student. The cohort model has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer:
You will need to create a migration in the console. When the migration file is created, open it and add the id of the cohort model to the student model.
the foreign key is the cohort id which is on the student model.

Researched answer:
Assuming students belongs_to cohort, you will need to generate a migration to add an additional column to the Student model. In the migration file you will
need to use the add_column method. The code will look something like this: add_column :students, :cohort_id, :integer. What this is doing is adding 
"cohort_id" (which is also the foreign key) column to the "students" table and the datatype is "integer". After you migrate the database students will now have that column. Since cohort has_many students, the foreign key on the student should match the primary key of the cohort.

https://guides.rubyonrails.org/active_record_migrations.html

2. Which RESTful routes must always be passed params? Why?

Your answer:
There are three RESTful routes that must be passed which are POST, PATCH and DELETE because they all require an id of the element.

Researched answer:
The RESTful routes that must be passed as params PUT, PATCH, and DELETE. Params are needed because each of these verbs require the ID of the 
resource. For example, PUT and PATCH are used to update a resource so the ID is required. Delete needs the ID as well if you need to delete
a specific resource.

https://hub.packtpub.com/what-are-rest-verbs-and-status-codes-tutorial/

3. Name three rails generator commands. What is created by each?

Your answer:
Rails generate migration: This will create a migration file allowing the developer to make changes to the database. After the developer has made their
changes they db:migrate to apply the changes.
Rails generate model: This will create a new model with attributes and datatypes
(I could not name another off the top of my head)

Researched answer:
Rails generate migration: This will generate a new migration file in "db/migrate" with an empty change method. It allows the devloper to alter the 
database which can be applied after migrating the database.
Rails generate model: This will generate a new model file with attributes and datatypes in "app/models". The developer can give the model give an 
additional attribute in the file with "has_many" so that it can contain multiple resources of a different model.
Rails generate controller: This will generate a new controller file.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
Index is the controller method for GET and will it display all of the students

action: "POST" location: /students
Create is the controller method for POST and it will make a new student

action: "GET" location: /students/new
Index is the controller method for GET but in this instance it is being used display the form for creating a new student.
Once the form is submitted then the Create controller method will be used to create a new student.

action: "GET" location: /students/2
Index is the controller method for GET and in this case it is being used to display the student with an ID of "2"

action: "GET" location: /students/2/edit
Index is the controller method for GET but in this scenario it will display the form for editing the student with an ID of "2".
Submitting the form will update student 2

action: "PATCH" location: /students/2
Update is the controller method for PATCH and it will alter student with an ID of "2".

action: "DELETE" location: /students/2
Destroy is the controller method for Delete and it will delete student with an ID of "2".

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

- As a user I need a resource of Things I Need To Do.
- As a user I need to see the  data of all ToDo's.
- As a user I need to create a new ToDo.
- As a user I need to update a ToDo.
- As a user I need to remove a ToDo.
- As a user I need a deadline for ToDo's
- As a user I need a location for ToDo's
- As a user I need to update a location for a ToDo.
- As a user I need to update a deadline for a ToDo.
- As a user I need the app to look pretty or else I would be less likely to continue using it.