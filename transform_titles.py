import os
import re

patstr = """```latex \\{cmd=true hide latex_zoom=5\\}
\\\\documentclass\\[varwidth\\]\\{standalone\\}
\\\\usepackage\\{xcolor\\}
(% )?\\\\color\\{white\\}
\\\\begin\\{document\\}
([a-zA-ZäöüÄÖÜ0-9\\.,\\-–\\s\\\\]+)
\\\\\\\\
\\\\end\\{document\\}
```
---"""
pat = re.compile(patstr)

def transform_titles_in_folder(path: str):
    for obj in os.listdir(path):
        objpath = os.path.join(path, obj)
        if os.path.isdir(objpath):
            transform_titles_in_folder(objpath)
        else:
            with open(objpath, "r+", encoding="utf8") as f:
                try:
                    contents = f.read()
                except UnicodeDecodeError:
                    continue
                f.seek(0)
                m = pat.search(contents)
                if m:
                    # Replace and write to the file
                    title = m.group(2).replace("\\\\", " ")
                    
                    f.write(contents.replace(m.group(0), f"# {title}\n---\n"))
                    f.truncate()

transform_titles_in_folder("content")
