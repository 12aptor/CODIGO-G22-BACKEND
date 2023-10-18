from datetime import timedelta

class Config:
    SQLALCHEMY_DATABASE_URI='mysql://root:root@localhost/db_shop_flask'
    SQLALCHEMY_TRACK_MODIFICATIONS=False
    JWT_SECRET_KEY='ES8ea1Zs01tBcDGPJxYzhoXfEES8ea1Zs01tBcDGPJxYzhoXfE'
    JWT_ACCESS_TOKEN_EXPIRES=timedelta(hours=1)