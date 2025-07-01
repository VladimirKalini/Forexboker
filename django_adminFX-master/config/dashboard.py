from admin_tools.dashboard import Dashboard, modules

class CustomIndexDashboard(Dashboard):
    def init_with_context(self, context):
        self.children.append(modules.ModelList(
            title='Пользователи и лиды',
            models=['core.models.User'],
        ))
        # можно добавить другие модули…
