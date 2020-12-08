from .base import *
from ..utils import get_server_info_value

SERVER_INFO = get_server_info_value("prod")

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = SERVER_INFO["SECRET_KEY"]

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

DATABASES = {"default": SERVER_INFO["DATABASES"]["default"]}

ALLOWED_HOSTS = ["3.35.249.83", "jwkil.com"]
