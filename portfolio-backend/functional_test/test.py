from django.test import LiveServerTestCase
from django.contrib.staticfiles.testing import StaticLiveServerTestCase
from selenium import webdriver
import time

class FunctionalTest(LiveServerTestCase):
    chromedriver = './chromedriver'

    def setUp(self):
        self.browser = webdriver.Chrome(self.chromedriver)

    def tearDown(self):
        self.browser.quit()

    def test_can_see_portfolio_list(self):
        # 채용담당자는 포트폴리오 목록을 확인하려고
        # 해당 웹사이트를 방문했다
        self.browser.get(self.live_server_url)

        # 웹 페이지 타이틀이
        # "I'm Kil Jaewoo" 를 표시하고 있다.
        time.sleep(5)
        self.assertEqual("I'm Kil Jaewoo", self.browser.title)

        # 개발자에 대해 알아보기 위해
        # Home, About, Skills, Projects, Contact를 클릭해본다.

        # 먼저 Home을 클릭해본다.
        # 스크롤이 움직이지 않고 화면이 그대로 유지된다.

        # About을 클릭한다.
        # 스크롤이 About id를 가진 태그까지 내려간다.

        # Skills 클릭한다.
        # 스크롤이 Skills id를 가진 태그까지 내려간다.

        # Projects 클릭한다.
        # 스크롤이 Projects id를 가진 태그까지 내려간다.

        # Contact를 클릭한다.
        # 스크롤이 가장 아래까지 내려간다.

        # 다시 Home을 눌러본다
        # 스크롤이 최상단으로 올라와 초기화면을 보여준다.