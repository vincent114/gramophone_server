
from nexus.utils import console_print
from nexus.pyramid.resources.app_datas import AppDatas


# Objects
# ======================================================================================================

# ----
# AppDatasGramophone
# ----

class AppDatasGramophone(AppDatas):

    # Actions
    # -

    @staticmethod
    def init_database():

        console_print('*** Database INIT ***')

        # TODO

    # Serializations
    # -

    def to_raw(self, request=None, extras={}):

        # RAW datas for UI
        # ---

        return dict()
