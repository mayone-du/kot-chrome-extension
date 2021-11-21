use wasm_bindgen::prelude::*;

#[wasm_bindgen]
#[derive(Debug)]
pub struct Times {
    pub hour: u32,
    pub minutes: u32,
}

/// 平日平均で何時間働いているかを返します。
///
/// * `work_time_minutes` - 実際に働いた分数
/// * `work_day_count` - 平日働いた日数
/// TODO: 小数点の調整, 計算をしっかりやる
/// TODO: 返り値のTimesに不要な値も必要と言われるから考える
#[wasm_bindgen]
pub fn calc_work_avarage(work_time_minutes: f32, work_day_count: u32) -> Times {
    let calced_avarage = (work_time_minutes / work_day_count as f32).round();
    Times {
        hour: calced_avarage as u32,
        minutes: calced_avarage as u32,
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_calc_work_avarage() {
        let result = calc_work_avarage(114.0, 14);
        println!("work time result: {:?}", result);
        assert_eq!(result.hour, 8.0);
        assert_eq!(result.minutes, 0);
    }
}
