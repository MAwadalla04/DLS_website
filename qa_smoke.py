from pathlib import Path
from playwright.sync_api import sync_playwright

BASE = "http://127.0.0.1:3000"
DISABLED_ROUTES = ["/program/", "/speakers/", "/venue/", "/sponsors/", "/register/", "/staging/hero/"]

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 1440, "height": 1000})
    page.goto(BASE + "/", wait_until="networkidle")
    page.screenshot(path="/tmp/dls-home-1440.png", full_page=True)
    assert page.get_by_text("October 29, 2026").count() >= 1
    assert page.get_by_text("John Jay College of Criminal Justice").count() >= 1
    assert page.get_by_text("Plan to be there").count() == 0
    assert page.get_by_text("Questions about the symposium?").count() >= 1
    assert page.locator("img[alt='New York City Emergency Management']").count() >= 2
    assert page.locator("a[href='/program']").count() == 0
    assert page.get_by_role("button", name="Open navigation").count() == 0
    assert page.get_by_text("Registration opening soon").count() >= 1
    assert page.locator('a[href*="2025"]').count() == 0
    assert page.locator("text=Wednesday, Nov 5, 2025").count() == 0

    for route in DISABLED_ROUTES:
        page.goto(BASE + route, wait_until="networkidle")
        assert page.url.rstrip("/") == BASE, route
        assert page.locator("h1").count() >= 1, route

    mobile = browser.new_page(viewport={"width": 375, "height": 812})
    mobile.goto(BASE + "/", wait_until="networkidle")
    mobile.screenshot(path="/tmp/dls-home-375.png", full_page=True)
    assert mobile.evaluate("document.documentElement.scrollWidth <= window.innerWidth + 1")
    assert mobile.get_by_role("button", name="Open navigation").count() == 0
    assert mobile.get_by_role("link", name="Program").count() == 0

    for width in (768, 1024):
        resized = browser.new_page(viewport={"width": width, "height": 900})
        resized.goto(BASE + "/", wait_until="networkidle")
        assert resized.evaluate("document.documentElement.scrollWidth <= window.innerWidth + 1"), width
        resized.close()

    print("smoke: passed home-only routing, responsive overflow, contact footer, and disabled navigation")
    browser.close()
