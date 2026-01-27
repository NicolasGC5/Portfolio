import { Injectable } from '@nestjs/common';
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
  create(createProjectDto: CreateProjectDto) {
    return 'This action adds a new project';
  }

  findAll(): Project[] {
    return [
      {
        id: 1,
        title: 'Dog API',
        description: 'REST API con CRUD completo',
        stack: ['NestJS', 'TypeScript', 'PostgreSQL'],
        status: 'in-progress',
      },
    ];
  }

  findOne(id: number) {
    return `This action returns a #${id} project`;
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return `This action updates a #${id} project`;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
