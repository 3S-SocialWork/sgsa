if [ -e "./db.sqlite3" ] ; then python manage.py flush --noinput ; else echo "The file db.sqlite3 does not exist." ; fi

find . -path "*/migrations/*.py" -not -name "__init__.py" -delete
find . -path "*/migrations/*.pyc"  -delete
find . -path "*/migrations/*.pyc"


python manage.py makemigrations
python manage.py migrate
python manage.py loaddata TiposTratamento
python manage.py loaddata Paciente
python manage.py loaddata Produto
python manage.py loaddata Beneficio
python manage.py loaddata Pedido
python manage.py loaddata Item