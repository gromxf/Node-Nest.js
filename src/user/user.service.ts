import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  private users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
    },
  ];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find(user => user.id === id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
  create(dto: CreateUserDto) {
    const nowUser = {
      id: this.users.length + 1,
      name: dto.name,
      email: dto.email,
      tags: dto.tags,
    };

    this.users.push(nowUser);
    return this.users;
  }
  update(id: number, dto: UpdateUserDto) {
    const { name, email } = dto;
    const user = this.findOne(id);

    user.name = name;
    user.email = email;

    return user;
  }
  patchUpdate(id: number, dto: Partial<UpdateUserDto>) {
    const user = this.findOne(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    Object.assign(user, dto);
    return user;
  }
  delete(id: number) {
    const user = this.findOne(id);
    this.users = this.users.filter((t) => t.id !== user.id);
    return user;
  }
}