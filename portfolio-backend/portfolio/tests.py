from django.test import TestCase
from django.template.loader import render_to_string
from django.http import HttpRequest
from .views import home


class HomePageTest(TestCase):
    def test_home_page_returns_correct_html(self):
        request = HttpRequest()
        response = home(request)
        expected_html = render_to_string("home.html", request=request)
        self.assertEqual(response.content.decode(), expected_html)