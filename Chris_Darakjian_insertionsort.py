lis = [9,8,7,6,5,4,3,2,1]
for i in range(0,len(lis)):
	if lis[i]<lis[i-1]:
		temp = lis[i]
		testspot = i-1
		while lis[testspot]>temp and testspot>-1:
			lis[testspot+1] = lis[testspot]
			testspot-=1
		lis[testspot+1] = temp
print(lis)
		




