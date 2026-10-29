
import type { ComponentType } from "react";
import {
  _React,
  Angular,
  NextjsIcon,
  Bootstrap,
  Javascript,
  Typescript,
  Tailwind,
  Java,
  Python,
  Django,
  Spring,
  Php,
  Symfony,
  Kotlin,
  Dotnet,
  Postgresql,
  Oracle,
  Mongodb,
  Mysql,
  Redis,
  AwsDynamodb,
  Sqlite,
  Docker,
  Kubernetes,
  Aws,
  GoogleCloud,
  Git,
  Postman,
  VisualStudioCode,
  Insomnia,
  SpringIcon,
  GithubIcon,
  Jira,
  AndroidIcon,
  MaterialUi,
  AntDesign,
  Figma,
  Swagger,
  Wordpress,
} from "@dev.icons/react";

type Technology = {
  id: number;
  name: string;
  Icon?: ComponentType<{ size?: number }>;
};

type TechnologyCategory =
  | "frontend"
  | "backend"
  | "databases"
  | "cloud"
  | "devops"
  | "tools"
  | "methodologies";

export const technologies: Record<
  TechnologyCategory,
  Technology[]
> = {
  frontend: [
    { id: 1, name: "React", Icon: _React },
    { id: 2, name: "Angular", Icon: Angular },
    { id: 3, name: "Next.js", Icon: NextjsIcon },
    { id: 4, name: "Bootstrap", Icon: Bootstrap },
    { id: 5, name: "JavaScript", Icon: Javascript },
    { id: 6, name: "TypeScript", Icon: Typescript },
    { id: 7, name: "Tailwind CSS", Icon: Tailwind },
    { id: 8, name: "Material UI", Icon: MaterialUi },
    { id: 9, name: "Ant Design", Icon: AntDesign },
    { id: 10, name: "React Bootstrap", Icon: Bootstrap },
  ],

  backend: [
    { id: 1, name: "Java", Icon: Java },
    { id: 2, name: "Spring Boot", Icon: Spring },
    { id: 3, name: "Python", Icon: Python },
    { id: 4, name: "Django REST Framework", Icon: Django },
    { id: 5, name: "PHP", Icon: Php },
    { id: 6, name: "Symfony", Icon: Symfony },
    { id: 7, name: "Kotlin", Icon: Kotlin },
    { id: 8, name: ".NET", Icon: Dotnet },
  ],

  databases: [
    { id: 1, name: "PostgreSQL", Icon: Postgresql },
    { id: 2, name: "Oracle", Icon: Oracle },
    { id: 3, name: "MongoDB", Icon: Mongodb },
    { id: 4, name: "MySQL", Icon: Mysql },
    { id: 5, name: "Redis", Icon: Redis },
    { id: 6, name: "DynamoDB", Icon: AwsDynamodb },
    { id: 7, name: "SQLite", Icon: Sqlite },
  ],

  cloud: [
    { id: 1, name: "AWS", Icon: Aws },
    { id: 2, name: "Google Cloud", Icon: GoogleCloud },
  ],

  devops: [
    { id: 1, name: "Docker", Icon: Docker },
    { id: 2, name: "Kubernetes", Icon: Kubernetes },
    { id: 3, name: "Git", Icon: Git },
    { id: 4, name: "GitHub", Icon: GithubIcon },
  ],

  tools: [
    { id: 1, name: "Postman", Icon: Postman },
    { id: 2, name: "Visual Studio Code", Icon: VisualStudioCode },
    { id: 3, name: "Insomnia", Icon: Insomnia },
    { id: 4, name: "SpringToolSuite", Icon: SpringIcon },
    { id: 5, name: "Jira", Icon: Jira },
    { id: 6, name: "Android Studio", Icon: AndroidIcon },
    { id: 7, name: "Figma", Icon: Figma },
    { id: 8, name: "Swagger", Icon: Swagger },
    { id: 9, name: "Wordpress", Icon: Wordpress },
    { id: 10, name: "Dbeaver" },
    { id: 11, name: "Jaspersoft Studio" },
  ],

  methodologies: [
    { id: 1, name: "Scrum" },
    { id: 2, name: "Kanban" },
  ],
};