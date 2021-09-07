
from gramophone.libs import acl
# from gramophone.resources.user import User

from nexus.services import smap
from nexus.db import db_main
from nexus.db import NxRegistry


# ======================================================================================================

gramophone_registry = NxRegistry(db_main)
# gramophone_registry.add(User)


# Objects
# ======================================================================================================

# ---
# Root
# ---

class Root:

    __name__ = ''
    __parent__ = None

    __acl__ = acl.ACL

    def __init__(self, request):
        if request.matchdict:
            self.__dict__.update(request.matchdict)

        self.request = request
        self.db = db_main
        request.db = self.db
