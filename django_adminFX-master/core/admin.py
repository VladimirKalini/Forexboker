from django.contrib import admin
from .models import User


admin.site.site_header = "Администрирование FXBroker"
admin.site.site_title = "FXBroker Admin"
admin.site.index_title = "Добро пожаловать в панель управления"

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display       = ('id','email','first_name','last_name','country','phone','created_at','updated_at')
    list_display_links = ('email',)          # теперь по email кликаешь, чтобы редактировать
    readonly_fields    = ('created_at','updated_at')
    search_fields      = ('email','first_name','last_name','phone')
    list_filter        = ('country',)