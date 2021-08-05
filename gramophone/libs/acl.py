
from pyramid import security


# Datas
# ======================================================================================================

ACL = [
    (security.Allow, security.Everyone, ('public')),
    (security.Allow, 'role:G_VIEW', 'view'),
    (security.Allow, 'role:G_EDIT', ('view', 'edit')),
    (security.Allow, 'role:G_ADMIN',  ('view', 'edit', 'admin')),
    security.DENY_ALL,
]
