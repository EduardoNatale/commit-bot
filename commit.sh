commitMessage="Commit: $(date)"
echo "$commitMessage" >> commit.txt

git add .
git commit -m "$commitMessage"
git push origin master