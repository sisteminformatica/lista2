# Changelog

## [1.0.0] - 2026-04-20

### Added
- Botões de exportação e importação de dados do localStorage
- Função para exportar tarefas em arquivo JSON (tasks_backup.json)
- Função para importar tarefas de arquivo JSON com validação
- Merge da branch develop para main

### Features
- **Exportar Dados**: Download automático das tarefas em formato JSON
- **Importar Dados**: Carregamento de tarefas a partir de arquivo JSON com validação de formato

### Technical Details
- Implementado usando React Context para gerenciamento de estado
- Validação de dados JSON antes de importação
- Feedback ao usuário com mensagens de alerta
