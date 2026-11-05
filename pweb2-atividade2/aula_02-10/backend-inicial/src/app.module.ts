import { Module } from '@nestjs/common';
import { ProjetosModule } from './projetos/projetos.module';
import { TarefasModule } from './tarefas/tarefas.module';

@Module({
  imports: [TarefasModule, ProjetosModule],
})
export class AppModule {}
