export const formatCurrency = (currency: string) => {
	const preFormatCurrency = Number(currency.slice(1).split(',').join(''));

	return new Intl.NumberFormat('en-US', {
    currency: 'USD',
    style: 'currency',
  }).format(preFormatCurrency);
}

export const formatNumber = (amount:number) => {
  	return new Intl.NumberFormat('en-US', {
      currency: 'USD',
      style: 'currency',
    }).format(amount);
}

export const formatDate = (dateString: Date) => {
  return Intl.DateTimeFormat('en-US', { timeStyle: 'short', dateStyle: 'medium' }).format(new Date(dateString))
}