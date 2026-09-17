from pathlib import Path
from playwright.sync_api import sync_playwright

BASE = "http://127.0.0.1:3000"
ROUTES = ["/", "/program/", "/speakers/", "/venue/", "/sponsors/", "/register/"]

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 1440, "height": 1000})
    for route in ROUTES:
        page.goto(BASE + route, wait_until="networkidle")
        assert page.locator("#main-content").count() == 1, route
        assert page.locator("h1").count() >= 1, route
        assert page.evaluate("document.documentElement.scrollWidth <= window.innerWidth + 1"), route

    page.goto(BASE + "/", wait_until="networkidle")
    page.screenshot(path="/tmp/dls-home-1440.png", full_page=True)
    assert page.get_by_text("October 29, 2026").count() >= 1
    assert page.get_by_text("John Jay College of Criminal Justice").count() >= 1
    assert page.get_by_text("Registration opening soon").count() >= 1
    assert page.locator('a[href*="2025"]').count() == 0
    assert page.locator("text=Wednesday, Nov 5, 2025").count() == 0

    page.goto(BASE + "/speakers/", wait_until="networkidle")
    assert page.get_by_text("Jeh Johnson").count() >= 1
    assert page.get_by_text("Sonja Orgias").count() == 0
    page.get_by_role("button", name="Read biography").click()
    assert page.get_by_role("dialog").count() == 1
    page.keyboard.press("Escape")
    assert page.get_by_role("dialog").count() == 0

    page.goto(BASE + "/program/", wait_until="networkidle")
    page.screenshot(path="/tmp/dls-program-1440.png", full_page=True)
    assert page.get_by_text("Algorithmic Response: Governing Artificial Intelligence and Emerging Technologies in Emergencies").count() >= 1
    assert page.get_by_text("The Next Disaster Landscape: Legal Preparedness for Cascading and Complex Risks").count() >= 1
    assert page.get_by_text("This course examines the expanding role of artificial intelligence and emerging technologies in emergency management and disaster legal practice.").count() >= 1
    assert page.get_by_text("12:00", exact=True).count() >= 1
    assert page.get_by_text("1:30 p.m.", exact=True).count() >= 1

    mobile = browser.new_page(viewport={"width": 375, "height": 812})
    mobile.goto(BASE + "/", wait_until="networkidle")
    mobile.screenshot(path="/tmp/dls-home-375.png", full_page=True)
    assert mobile.evaluate("document.documentElement.scrollWidth <= window.innerWidth + 1")
    toggle = mobile.get_by_role("button", name="Open navigation")
    toggle.click()
    assert mobile.locator("#primary-navigation.is-open").count() == 1
    assert mobile.get_by_label("Primary navigation").get_by_role("link", name="Program").is_visible()
    mobile.get_by_role("button", name="Close navigation").click()
    assert mobile.locator("#primary-navigation.is-open").count() == 0
    mobile.goto(BASE + "/program/", wait_until="networkidle")
    mobile.screenshot(path="/tmp/dls-program-375.png", full_page=True)
    assert mobile.evaluate("document.documentElement.scrollWidth <= window.innerWidth + 1")

    for width in (768, 1024):
        resized = browser.new_page(viewport={"width": width, "height": 900})
        resized.goto(BASE + "/program/", wait_until="networkidle")
        assert resized.evaluate("document.documentElement.scrollWidth <= window.innerWidth + 1"), width
        resized.close()

    print("smoke: passed routes, responsive overflow, mobile nav, dialog, agenda, and placeholders")
    browser.close()
