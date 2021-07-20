# TypeScript avanzado
This is the repository for the LinkedIn Learning course TypeScript avanzado. The full course is available from [LinkedIn Learning][lil-course-url].

![TypeScript avanzado][lil-thumbnail-url] 
Descubre conceptos avanzados de TypeScript que te servirán para identificar y facilitar la asignación y uso de variables en tus próximos proyectos. Aprenderás a trabajar con módulos para organizar, extender y compartir el alcance de su código. También comenzarás a trabajar y generar código genérico para evitar reescribirlo cuando sea redundante. Por último, conocerás cómo trabajar con código asíncrono para que pueda optimizar las peticiones e interacción con datos en servicios remotos, así como la generación y uso de decoradores para poder extender y rehusar código en casi cualquier parte de tu proyecto.

## Instructions
This repository has branches for each of the videos in the course. You can use the branch pop up menu in github to switch to a specific branch and take a look at the course at that stage, or you can add `/tree/BRANCH_NAME` to the URL to go to the branch you want to access.

## Branches
The branches are structured to correspond to the videos in the course. The naming convention is `CHAPTER#_MOVIE#`. As an example, the branch named `02_03` corresponds to the second chapter and the third video in that chapter. 
Some branches will have a beginning and an end state. These are marked with the letters `b` for "beginning" and `e` for "end". The `b` branch contains the code as it is at the beginning of the movie. The `e` branch contains the code as it is at the end of the movie. The `main` branch holds the final state of the code when in the course.

When switching from one exercise files branch to the next after making changes to the files, you will get a message like this:

    error: Your local changes to the following files would be overwritten by checkout:        [files]
    Please commit your changes or stash them before you switch branches.
    Aborting

To resolve this issue:
	
    Add changes to git using this command: git add .
    Commit changes using this command: git commit -m "some message"


### Instructor

**Sergio Brito**

_Desarrollador de software y consultor_

Check out my other courses on [LinkedIn Learning](https://www.linkedin.com/learning/instructors/sergio-brito?u=104).

[lil-course-url]: https://www.linkedin.com/learning/typescript-avanzado
[lil-thumbnail-url]: https://cdn.lynda.com/course/2931139/2931139-1609845847251-16x9.jpg
