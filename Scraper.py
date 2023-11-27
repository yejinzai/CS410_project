#final program
import sys
import requests
from bs4 import BeautifulSoup
import urllib.parse as urlp


from typing import Any, List

class WebScrapeTedTalk:
    
    def __init__(self, search_phrase: str = 'climate change'):
        self.base_url= 'https://www.ted.com'
        self.search_phrase= search_phrase
    
    
    def _create_soup(self) -> Any:
        """
            Entry point to the crawler. Builds the Soup object by parsing the html
            which is used by other functions for specific searches.
        """
        search_phrase_url_encode= urlp.quote(self.search_phrase)
        url= f"https://www.ted.com/search?q={search_phrase_url_encode}"
        
        try:
            response= requests.get(url)  
        except:
            print("Issue calling url")
            
        
        soup_obj= BeautifulSoup(response.content, 'html.parser')
        
        return soup_obj
        
        
    def _build_url_link_list(self) -> List:
        """
        Builds the URL list from the search.
        """
        url_list = [link.get('href') for link in self._create_soup().find_all('a', class_= 'ga-link visible-url-link' )]
            
        return [self.base_url+i for i in url_list]
        
        
    def _build_description_list(self) -> List:
        """
        Builds the description list.
        """
        return [ele.text.replace('\n','') for ele in self._create_soup().find_all('div', class_='search__result__description m4')]
        
       
    def _build_title_list(self) -> List:
        """
        Builds the title list.
        """
        name_list=[]
        lname= self._create_soup().find_all('a', class_='ga-link')    
        stg_name_list= [i.text for i in lname if (i.get('data-ga-context')=='search' and i.text.find('https') < 0)]    
        return [i for i in stg_name_list if i!= '']
    
    
    def output_as_records(self) -> Any:
        """
        Returns a record object of (title, url and desccription).
        """
        
        s=zip(self._build_url_link_list(), self._build_title_list(), self._build_description_list())
        rec=[]
        dic={}
        for row in s:
            rec.append(   
                {
                    'Url': row[0],
                    'Title': row[1],
                    'Description': row[2]
                }
             )
        
        return rec