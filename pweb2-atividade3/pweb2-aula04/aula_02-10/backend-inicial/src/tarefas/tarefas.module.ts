import { Module } from '@nestjs/common';
import { TarefasController } from './tarefas.controller';
import { TarefasService } from './tarefas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tarefa } from './entities/tarefa.entity';

// Um módulo agrupa um recurso: aqui, o controller e o service de "tarefas".
@Module({
  controllers: [TarefasController],
  providers: [TarefasService],
  imports: [TypeOrmModule.forFeature([Tarefa])],
})
export class TarefasModule {}
