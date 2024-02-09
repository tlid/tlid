rm -rf dist build &> /dev/null
rm -rf tlid.egg-info &> /dev/null
python3 setup.py sdist bdist_wheel && \
	twine upload dist/*
git push --tags &> /dev/null
git push  &> /dev/null
