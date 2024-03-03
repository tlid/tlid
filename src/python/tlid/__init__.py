# tlid.py

from datetime import datetime

def get_tlid():
    return datetime.now().strftime("%y%m%d%H%M%S")

def get_milliseconds():
    return datetime.now().strftime("%y%m%d%H%M%S%f")[:-3]

def get_seconds():
    return get_tlid()

def get_minutes():
    return datetime.now().strftime("%y%m%d%H%M")

def get_hour():
    return datetime.now().strftime("%y%m%d%H")

def get_day():
    return datetime.now().strftime("%y%m%d")

def get_month():
    return datetime.now().strftime("%y%m")

def get_year():
    return datetime.now().strftime("%y")

def extract_tlid(string):
    digits = ''.join(filter(str.isdigit, string))
    return digits if len(digits) in (12, 15) else None

def has_tlid(string):
    return extract_tlid(string) is not None

def clean_tlid(string):
    tlid = extract_tlid(string)
    return string.replace(tlid, '').strip() if tlid else string

def to_date(tlid_str):
    if len(tlid_str) == 12:
        return datetime.strptime(tlid_str, "%y%m%d%H%M%S")
    elif len(tlid_str) == 15:
        return datetime.strptime(tlid_str, "%y%m%d%H%M%S%f")
    elif len(tlid_str) == 8:
        return datetime.strptime(tlid_str, "%y%m%d%H")
    elif len(tlid_str) == 6:
        return datetime.strptime(tlid_str, "%y%m%d")
    elif len(tlid_str) == 10:
        return datetime.strptime(tlid_str, "%Y%m%d")
    else:
        raise ValueError("Invalid TLID string length.")


def tlid_dt_to_string(dt,no_seconds=True,year_two_digits=True):
    fmt = "%y%m%d%H%M"
    
    if year_two_digits is False:
        fmt="%Y%m%d%H%M"
        
    if no_seconds is False:
        fmt=fmt+"%S"
        
    return dt.strftime(fmt)

def tlid_dt_to_string_day(dt):
    return dt.strftime("%y%m%d")
def tlid_dt_to_string_seconds(dt):
    return dt.strftime("%y%m%d%H%M%SS")


def formatted_from_pto(dt, fmt):
    return dt.strftime(fmt)

def strdt(dt_str,no_seconds=True,year_two_digits=True):
    formats = ["%Y-%m-%d", "%Y-%m-%d %H", "%Y-%m-%d %H:%M", "%Y-%m-%d %H:%M:%S","%y-%m-%d", "%y-%m-%d %H", "%y-%m-%d %H:%M", "%y-%m-%d %H:%M:%S","%Y/%m/%d", "%Y/%m/%d %H", "%Y/%m/%d %H:%M", "%Y/%m/%d %H:%M:%S","%y/%m/%d", "%y/%m/%d %H", "%y/%m/%d %H:%M", "%y/%m/%d %H:%M:%S","%Y-%m-%d", "%Y-%m-%d %H", "%Y-%m-%d %H%M", "%Y-%m-%d %H%M%S","%y-%m-%d", "%y-%m-%d %H", "%y-%m-%d %H%M", "%y-%m-%d %H%M%S","%Y/%m/%d", "%Y/%m/%d %H", "%Y/%m/%d %H%M", "%Y/%m/%d %H%M%S","%y/%m/%d", "%y/%m/%d %H", "%y/%m/%d %H%M", "%y/%m/%d %H%M%S"]
    for fmt in formats:
        try:
            dtobj= datetime.strptime(dt_str, fmt)
            fixed_fmt = fmt.replace("-","").replace("/","").replace(":","").replace(" ","").replace("Y","y")
            #remove seconds '2019-01-01 00:00:00' 
            if no_seconds:
                fixed_fmt = fixed_fmt.replace("%S","")
            if year_two_digits:
                fixed_fmt = fixed_fmt.replace("%Y","%y")
            else:
                fixed_fmt = fixed_fmt.replace("%y","%Y")
            result=formatted_from_pto(dtobj, fixed_fmt)
            return result
        except ValueError:
            pass
    raise ValueError(f"no valid date format found for {dt_str}")

def fromdtstr(dt_str,no_seconds=True,year_two_digits=True):
    return strdt(dt_str,no_seconds,year_two_digits)