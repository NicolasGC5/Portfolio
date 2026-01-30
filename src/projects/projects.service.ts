import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

interface Project {
  id: number;
  title: string;
  description: string;
  stack: string[];
  status: string;
}

@Injectable()
export class ProjectsService {
  private projects: Project[] = [];

  create(createProjectDto: CreateProjectDto): Project {
    const id =
      this.projects.length > 0
        ? Math.max(...this.projects.map((p) => p.id)) + 1
        : 1;

    const title: string = createProjectDto.title || '';
    const description: string = createProjectDto.description || '';
    const stack: string[] = createProjectDto.stack || [];
    const status: string = createProjectDto.status || 'draft';

    const newProject: Project = {
      id,
      title,
      description,
      stack,
      status,
    };

    this.projects.push(newProject);
    return newProject;
  }

  findAll(): Project[] {
    return [...this.projects];
  }

  findOne(id: number): Project {
    const project = this.projects.find((p) => p.id === id);
    if (!project) {
      throw new NotFoundException(`Project with id ${id} not found`);
    }
    return project;
  }

  update(id: number, updateProjectDto: UpdateProjectDto): Project {
    const project = this.findOne(id);
    const updatedProject: Project = Object.assign(project, updateProjectDto);
    return updatedProject;
  }

  remove(id: number): void {
    const idx = this.projects.findIndex((p) => p.id === id);
    if (idx === -1) {
      throw new NotFoundException(`Project with id ${id} not found`);
    }
    this.projects.splice(idx, 1);
  }
}
