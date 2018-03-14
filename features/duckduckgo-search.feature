Feature: DuckDuckGo

Scenario: Searching DuckDuckGo

  Given I open DuckDuckGo search page
  Then the title is "DuckDuckGo Search Engine"
  And the search form exists

Scenario: Searching DuckDuckGo again

  Given I open DuckDuckGo search page
  Then the title is "DuckDuckGo Search Engine"
  And the search form exists
