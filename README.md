# js-training

# 12 Factor App:
- Codebase : Codebase principle states that your application should have a single place where all its source code is stored.

- Dependencies : Dependencies suggest your application should not pre-requisties such as packages to run the application. It encourages you to clearly specify and document all the dependencies your application uses. Futhermore all dependencies should not bundled together with the application but should be managed separately.

- Config : All the configuration setting such as environmental, database passwords should be stored in environmental file, not in the code. This ensures we can make our project open-source at any point.

- Backing Services : Backing services are services that your app relies on but is the part of the application code. Instead of bundling these services in your code, you should connect to them as attached resources. This allows us to switch databases without much modification of the code.

- Build, Release, Run : This states to clearly separate the build, runtime and release stages of the product. Futhermore every release should have its own unique release ID.

- Processes : In 12 factor app, the application should run as one or more processes meaning it should be independent and share nothing with other process. This makes it easier to scale horizontally.

- Port Binding : An application should be self-contained and not rely on a specific server configuration. This means using a standardized and configurable method for your application to communicate with the outside world.

- Concurrency :Scaling of application should be done via adding more processes, rather than making individual process more complex. This make processes easier to manage and scale.

- Disposability : This states that when we deploy our application, it should be able to begin serving requests and handling tasks immediately. Futhermore the application should be able to shut done gracefully. This includes saving neccessary data and closing connections properly.

- Dev/Prod Parity : This principle suggests to keep development, staging and production build as similar as possible. This helps to debug issues faster and reduces the likelihood of issues like "It works on my machine".

- Logs : This principle emphasizes the importance of recording what happens in the application and making these records avaliable for analysis in case of application failure.

- Admin Processes : Admin tasks should run as a one-off processes meaning it should interfere with the normal operations of the application.

# Atomic Design
Atomic Design is a methodology for creating and managing design systems and user interfaces in a structed way. It takes it inspiration from chemistry, where elements are organised in a hierarchial way. Componenets of atomic design:

- Atoms : Atoms are basic building blocks of user interface. They are smallest, indivisible elements such as buttons, labels, icons etc.

- Molecules : Molecules are formed by combining multiple atoms together. They represent UI elements that work together to achieve a specific task. Example includes a Search Bar which is formed by combining and input field and search button.

- Organisms : Organisms are formed by combining molecules and other organisms. They represent unique section of a user interface that serve a specific purpose. Examples include a header or footer with navigation links.

- Templates : Template are higher-level structures that defines the layout of a page. They provides a basic framework for the content specifing where each element should be placed.

- Pages : The page is the highest level of the design hierarchy. A page is the final instance of user interface that user interacts with. It is where all elements come together to form a complete webpage.
