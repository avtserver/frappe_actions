from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in frappe_actions/__init__.py
from frappe_actions import __version__ as version

setup(
	name="frappe_actions",
	version=version,
	description="actions for all",
	author="faiyaz",
	author_email="faiyaz@avtutoring.in",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
